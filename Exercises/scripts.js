"use strict";

var payRate = 25; // pay rate
var hoursWorked = 30; // hours worked
var grossPay;
var regularPay = payRate * 40;
var overtimePay = (hoursWorked - 40) * payRate * overtimeRate;
var overtimeRate = 1.5;

if (hoursWorked > 40) {
  grossPay = regularPay + overtimePay;
} else {
    grossPay = payRate * hoursWorked; // No overtime
  }

console.log(grossPay);