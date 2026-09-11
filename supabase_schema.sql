-- ============================================================
-- NineBooks — Supabase Database Schema
-- Class 9 Bangladesh Curriculum Study App
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. SUBJECTS
-- ============================================================
CREATE TABLE subjects (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_bn     TEXT NOT NULL,
    name_en     TEXT NOT NULL,
    icon_url    TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 2. CHAPTERS
-- ============================================================
CREATE TABLE chapters (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subject_id  UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    title_bn    TEXT NOT NULL,
    title_en    TEXT NOT NULL,
    order_index INT NOT NULL DEFAULT 0,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_chapters_subject_id ON chapters(subject_id);

-- ============================================================
-- 3. LESSONS
-- ============================================================
CREATE TABLE lessons (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chapter_id      UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    content_text    TEXT NOT NULL,
    audio_url       TEXT,
    order_index     INT NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_lessons_chapter_id ON lessons(chapter_id);

-- ============================================================
-- 4. EXAM QUESTIONS
-- ============================================================
CREATE TABLE exam_questions (
    id                   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chapter_id           UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    question_bn          TEXT NOT NULL,
    question_en          TEXT NOT NULL,
    options_json         JSONB NOT NULL,
    correct_answer_index INT NOT NULL,
    created_at           TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_exam_questions_chapter_id ON exam_questions(chapter_id);

-- ============================================================
-- 5. STUDENT PROGRESS
-- ============================================================
CREATE TABLE student_progress (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id    UUID NOT NULL,
    chapter_id    UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    score         INT NOT NULL,
    total         INT NOT NULL,
    completed_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_student_progress_student_id ON student_progress(student_id);
CREATE INDEX idx_student_progress_chapter_id ON student_progress(chapter_id);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE subjects         ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters         ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons          ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_questions   ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;

-- Content tables: public read
CREATE POLICY "Anyone can read subjects"       ON subjects       FOR SELECT USING (true);
CREATE POLICY "Anyone can read chapters"       ON chapters       FOR SELECT USING (true);
CREATE POLICY "Anyone can read lessons"        ON lessons        FOR SELECT USING (true);
CREATE POLICY "Anyone can read exam questions" ON exam_questions FOR SELECT USING (true);

-- Student progress: own data only
CREATE POLICY "Students can read own progress"   ON student_progress FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Students can insert own progress" ON student_progress FOR INSERT WITH CHECK (auth.uid() = student_id);
CREATE POLICY "Students can update own progress" ON student_progress FOR UPDATE USING (auth.uid() = student_id) WITH CHECK (auth.uid() = student_id);

-- Parent dashboard: any authenticated user can read all progress
CREATE POLICY "Authenticated users can read all progress" ON student_progress FOR SELECT USING (auth.role() = 'authenticated');
