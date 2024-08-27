import Result "mo:base/Result";
import Text "mo:base/Text";

import Error "mo:base/Error";

actor {
  public func processPrompt(prompt: Text) : async Result.Result<Text, Text> {
    try {
      // Simulating prompt processing
      if (prompt == "") {
        return #err("Prompt cannot be empty");
      };
      // Add your actual prompt processing logic here
      return #ok("Processed: " # prompt);
    } catch (e) {
      return #err("An error occurred: " # Error.message(e));
    };
  };
}