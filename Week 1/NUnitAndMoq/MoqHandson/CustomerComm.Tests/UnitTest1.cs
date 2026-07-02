using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerCommTests
{
    public class Tests
    {
        [Test]
        public void SendMailToCustomer_ReturnsTrue()
        {
            // Arrange
            var mockMailSender = new Mock<IMailSender>();

            mockMailSender
                .Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);

            var customerComm = new CustomerCommLib.CustomerComm(mockMailSender.Object);

            // Act
            bool result = customerComm.SendMailToCustomer();

            // Assert
            Assert.That(result, Is.True);
        }
    }
}