import Types "../types/visitor-counter";

module {
  public type State = { var count : Nat };

  public func newState() : State {
    { var count = 0 };
  };

  public func increment(state : State) : Nat {
    state.count += 1;
    state.count;
  };

  public func getCount(state : State) : Nat {
    state.count;
  };
};
