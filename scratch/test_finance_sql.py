with open('seed_finance_banking_bundle.sql', encoding='utf-8') as f:
    content = f.read()

assert 'DO $ROOT_FINANCE_BLOCK$' in content, "Missing DO tag"
assert 'END $ROOT_FINANCE_BLOCK$;' in content, "Missing END tag"
assert 'options_json' in content, "Missing options_json"
assert 'correct_answer_index' in content, "Missing correct_answer_index"
assert 'options,' not in content, "Invalid column 'options'"
print("SQL bundle validation 100% SUCCESSFUL!")
print(f"Total characters: {len(content):,}")
