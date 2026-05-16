import VisitorCounterLib "../lib/visitor-counter";

mixin (state : VisitorCounterLib.State) {
  public func incrementVisitor() : async Nat {
    VisitorCounterLib.increment(state);
  };

  public query func getVisitorCount() : async Nat {
    VisitorCounterLib.getCount(state);
  };
};
