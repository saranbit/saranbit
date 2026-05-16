import VisitorCounterLib "lib/visitor-counter";
import VisitorCounterApi "mixins/visitor-counter-api";

actor {
  let visitorState = VisitorCounterLib.newState();
  include VisitorCounterApi(visitorState);
};

