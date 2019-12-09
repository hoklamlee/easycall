using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using NUnit.Framework;
using System.IO;

namespace NUnitTestProject
{
    public class Tests
    {
        private IOptions<POS.Helpers.Settings> _config;

        public static IConfiguration InitConfiguration()
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();
            return config;
        }

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }

        [Test]
        public void SendWhatsapp()
        {
            var config = InitConfiguration();
            var options = config.Get<POS.Helpers.Settings>();

          
            IOptions<POS.Helpers.Settings> someOptions = Options.Create<POS.Helpers.Settings>(options);


            EasyCall.Services.TwilioService messageService = new EasyCall.Services.TwilioService(someOptions);
            messageService.SendWhatsapp("+14155238886", "+85264974312", "test");
        }
    }
}