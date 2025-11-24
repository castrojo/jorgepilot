#!/bin/bash
# Test script for cncf.Brewfile validation

set -e

echo "=== Testing cncf.Brewfile ==="
echo ""

# Test 1: Check if file exists
echo "Test 1: Checking if cncf.Brewfile exists..."
if [ -f "cncf.Brewfile" ]; then
    echo "✓ cncf.Brewfile exists"
else
    echo "✗ cncf.Brewfile not found"
    exit 1
fi
echo ""

# Test 2: Check Ruby syntax
echo "Test 2: Validating Ruby syntax..."
if ruby -c cncf.Brewfile > /dev/null 2>&1; then
    echo "✓ Ruby syntax is valid"
else
    echo "✗ Ruby syntax check failed"
    exit 1
fi
echo ""

# Test 3: Count formulas in each section
echo "Test 3: Counting formulas by section..."
GRADUATED=$(grep -A 1000 "=== GRADUATED PROJECTS ===" cncf.Brewfile | grep -B 1000 "=== INCUBATING PROJECTS ===" | grep -c '^brew "' || echo 0)
INCUBATING=$(grep -A 1000 "=== INCUBATING PROJECTS ===" cncf.Brewfile | grep -B 1000 "=== SANDBOX PROJECTS ===" | grep -c '^brew "' || echo 0)
SANDBOX=$(grep -A 1000 "=== SANDBOX PROJECTS ===" cncf.Brewfile | grep -B 1000 "=== SUMMARY ===" | grep -c '^brew "' || echo 0)
TOTAL=$((GRADUATED + INCUBATING + SANDBOX))

echo "  Graduated projects: $GRADUATED formulas"
echo "  Incubating projects: $INCUBATING formulas"
echo "  Sandbox projects: $SANDBOX formulas"
echo "  Total: $TOTAL formulas"
echo ""

# Test 4: Verify all sections are present
echo "Test 4: Verifying all required sections..."
if grep -q "=== GRADUATED PROJECTS ===" cncf.Brewfile; then
    echo "✓ Graduated projects section found"
else
    echo "✗ Graduated projects section missing"
    exit 1
fi

if grep -q "=== INCUBATING PROJECTS ===" cncf.Brewfile; then
    echo "✓ Incubating projects section found"
else
    echo "✗ Incubating projects section missing"
    exit 1
fi

if grep -q "=== SANDBOX PROJECTS ===" cncf.Brewfile; then
    echo "✓ Sandbox projects section found"
else
    echo "✗ Sandbox projects section missing"
    exit 1
fi
echo ""

# Test 5: Check for duplicate formulas
echo "Test 5: Checking for duplicate formulas..."
DUPLICATES=$(grep '^brew "' cncf.Brewfile | sort | uniq -d)
if [ -z "$DUPLICATES" ]; then
    echo "✓ No duplicate formulas found"
else
    echo "✗ Duplicate formulas found:"
    echo "$DUPLICATES"
    exit 1
fi
echo ""

# Test 6: Verify formula format
echo "Test 6: Verifying formula format..."
INVALID=$(grep '^brew "' cncf.Brewfile | grep -v '^brew "[a-zA-Z0-9_-]\+"$' || true)
if [ -z "$INVALID" ]; then
    echo "✓ All formulas have valid format"
else
    echo "✗ Invalid formula format found:"
    echo "$INVALID"
    exit 1
fi
echo ""

echo "=== All tests passed! ==="
echo ""
echo "Summary:"
echo "  ✓ File exists and is readable"
echo "  ✓ Ruby syntax is valid"
echo "  ✓ All three maturity level sections present"
echo "  ✓ $TOTAL total formulas found"
echo "  ✓ No duplicate formulas"
echo "  ✓ All formulas have valid format"
