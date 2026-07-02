using NUnit.Framework;
using CalcLibrary;
using System;

namespace NUnitHandson
{
    public class Tests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Setup()
        {
            calculator = new SimpleCalculator();
        }

        [Test]
        public void AdditionTest()
        {
            Assert.That(calculator.Addition(10, 5), Is.EqualTo(15));
        }

        [Test]
        public void SubtractionTest()
        {
            Assert.That(calculator.Subtraction(10, 5), Is.EqualTo(5));
        }

        [Test]
        public void MultiplicationTest()
        {
            Assert.That(calculator.Multiplication(10, 5), Is.EqualTo(50));
        }

        [Test]
        public void DivisionTest()
        {
            Assert.That(calculator.Division(10, 5), Is.EqualTo(2));
        }

        [Test]
        public void DivisionByZeroTest()
        {
            Assert.Throws<ArgumentException>(() => calculator.Division(10, 0));
        }

        [Test]
        public void AllClearTest()
        {
            calculator.Addition(10, 5);
            calculator.AllClear();
            Assert.That(calculator.GetResult, Is.EqualTo(0));
        }
    }
}