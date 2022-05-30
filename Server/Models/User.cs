using System.Text.Json.Serialization;

namespace Server.Models
{
    public class User
    {
        public Guid Id { get; set; }

        public string UserName { get; set; } = string.Empty;

        [JsonIgnore]
        public string Password { get; set; } = string.Empty;
    }
}