using System.Runtime.Serialization;

namespace Api.Contracts
{
  [DataContract]
  public class AuthenticationContract
  {
    [DataMember]
    public string Email { get; set; }

    [DataMember]
    public string Password { get; set; }
  }
}