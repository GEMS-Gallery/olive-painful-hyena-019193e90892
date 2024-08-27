import Text "mo:base/Text";
import Result "mo:base/Result";
import Error "mo:base/Error";

actor {
  var file_content : Text = "This is a mock content of ~/.config/dfx/identity/default/identity.pem";

  public func read_file() : async Result.Result<Text, Text> {
    #ok(file_content)
  };
}