# E-Commerce Purchase Test Cases

## TC-001: User Registration

| Field | Details |
|---|---|
| Test Case ID | TC-001 |
| Test Scenario | User Registration |
| Preconditions | Backend and MongoDB are running |
| Test Steps | 1. Open Register page  2. Enter name, email and password  3. Click Register |
| Expected Result | Registration should be successful |
| Status | PASS |

---

## TC-002: User Login

| Field | Details |
|---|---|
| Test Case ID | TC-002 |
| Test Scenario | User Login |
| Preconditions | User must be registered |
| Test Steps | 1. Open Login page  2. Enter valid email and password  3. Click Login |
| Expected Result | Login should be successful and user should be redirected to Home |
| Status | PASS |

---

## TC-003: Product Search

| Field | Details |
|---|---|
| Test Case ID | TC-003 |
| Test Scenario | Search Product |
| Preconditions | Products are available |
| Test Steps | 1. Enter product name in search bar  2. Select suggestion |
| Expected Result | Matching products should be displayed |
| Status | PASS |

---

## TC-004: Product Filtering

| Field | Details |
|---|---|
| Test Case ID | TC-004 |
| Test Scenario | Filter Products |
| Preconditions | Products are available |
| Test Steps | 1. Select category, brand, color or size  2. Apply filter |
| Expected Result | Products matching selected filters should be displayed |
| Status | PASS |

---

## TC-005: Product Sorting

| Field | Details |
|---|---|
| Test Case ID | TC-005 |
| Test Scenario | Sort Products |
| Preconditions | Products are available |
| Test Steps | 1. Select price or popularity sorting option |
| Expected Result | Products should be sorted according to the selected option |
| Status | PASS |

---

## TC-006: Add Product to Cart

| Field | Details |
|---|---|
| Test Case ID | TC-006 |
| Test Scenario | Add Product to Cart |
| Preconditions | Product must be in stock |
| Test Steps | 1. Open Product Details  2. Click Add to Cart |
| Expected Result | Product should be added to cart and cart count should increase |
| Status | PASS |

---

## TC-007: Update Cart Quantity

| Field | Details |
|---|---|
| Test Case ID | TC-007 |
| Test Scenario | Increase / Decrease Quantity |
| Preconditions | Product exists in cart |
| Test Steps | 1. Open Cart  2. Click + or - quantity button |
| Expected Result | Product quantity and total amount should update |
| Status | PASS |

---

## TC-008: Remove Product from Cart

| Field | Details |
|---|---|
| Test Case ID | TC-008 |
| Test Scenario | Remove Product |
| Preconditions | Product exists in cart |
| Test Steps | 1. Open Cart  2. Click Remove |
| Expected Result | Product should be removed from cart |
| Status | PASS |

---

## TC-009: Purchase Product

| Field | Details |
|---|---|
| Test Case ID | TC-009 |
| Test Scenario | Purchase Product |
| Preconditions | Product is added to cart |
| Test Steps | 1. Open Cart  2. Click Proceed to Checkout  3. Enter delivery information  4. Click Place Order |
| Expected Result | Order should be placed successfully and success message should be displayed |
| Status | PASS |

---

## TC-010: Empty Cart After Purchase

| Field | Details |
|---|---|
| Test Case ID | TC-010 |
| Test Scenario | Cart Validation After Purchase |
| Preconditions | Order has been placed successfully |
| Test Steps | 1. Place an order  2. Check cart |
| Expected Result | Cart should be empty after successful purchase |
| Status | PASS |