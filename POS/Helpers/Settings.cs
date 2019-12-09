using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POS.Helpers
{
    public class Settings
    {
        public AppSettings AppSettings { get; set; }
        public ConnectionString ConnectionString { get; set;  }

        public Twilio Twilio { get; set; }
    }

    public class AppSettings
    {
        public string Secret { get; set; }
    }

    public class ConnectionString
    {
        public string DefaultConnection { get; set; }
    }

    public class Twilio
    {
        public string AccountSid { get; set; }
        public string AuthToken { get; set; }
        public string From { get; set; }
    }
}
