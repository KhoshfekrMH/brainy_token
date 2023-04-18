import Principal "mo:base/Principal";
import Env "env";
import Debug "mo:base/Debug";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

actor Brainy_Token {
    var link1 = "@avocado.yatim.top:2083?type=ws&security=tls&path=%2Fdns0in&host=avocado.yatim.top&sni=avocado.yatim.top#vws";
    
    var owner : Principal = Principal.fromText(Env.OWNER_PRINCIPAL);
    var totalSupply : Nat = Env.TOTAL_SUPPLY;
    var symbol : Text = "BKH";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);
    
    public query func balanceOf(who: Principal) : async Nat {
        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol(): async Text {
        return symbol;
    };
};