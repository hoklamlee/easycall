using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using POS.Helpers;
using POS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace EasyCall.Services
{
    public class TwilioService
    {
        private readonly Settings _settings;
        private readonly string _accountSid = "";
        private readonly string _authToken = "";
        private readonly string _from = "";


        public TwilioService(Settings settings)
        {
            _settings = settings;

            _accountSid = settings.Twilio.AccountSid;
            _authToken = settings.Twilio.AuthToken;
            _from = settings.Twilio.From;

        }

        public void SendWhatsapp(string to, string body)
        {
            string accountSid = _accountSid;
            string authToken = _authToken;

            TwilioClient.Init(accountSid, authToken);

            var message = MessageResource.Create(
                from: new Twilio.Types.PhoneNumber("whatsapp:" + _from),//new Twilio.Types.PhoneNumber("whatsapp:+14155238886"),
                body: body,
                to: new Twilio.Types.PhoneNumber("whatsapp:" + to)
            );
        }
    }
}
