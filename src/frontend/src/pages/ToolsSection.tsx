import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Delete } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FUNNY_RESPONSES: Record<string, string> = {
  "42": "The answer to life, the universe, and everything! 😂",
  "0": "Zero... just like my motivation on Mondays 🙄",
  "69": "Nice 😉",
  "420": "Blaze it... with knowledge! 📚",
  "1337": "L33T h4x0r detected! 💻",
  "666": "Oooh spooky... the number of the beast! 👹",
  "100": "PERFECT SCORE! You're on fire! 🔥",
  "3.14": "Mmmm... pi... delicious! 🥧",
};

function FunnyCalculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState("");
  const [op, setOp] = useState("");
  const [funny, setFunny] = useState("");
  const { isColorful } = useColorfulMode();

  const buttons = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "⌫", "="],
  ];

  const handleBtn = (val: string) => {
    setFunny("");
    if (val === "C") {
      setDisplay("0");
      setPrev("");
      setOp("");
      return;
    }
    if (val === "⌫") {
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
      return;
    }
    if (val === "+/-") {
      setDisplay(String(-Number.parseFloat(display)));
      return;
    }
    if (val === "%") {
      setDisplay(String(Number.parseFloat(display) / 100));
      return;
    }

    if (["÷", "×", "-", "+"].includes(val)) {
      setPrev(display);
      setOp(val);
      setDisplay("0");
      return;
    }

    if (val === "=") {
      const a = Number.parseFloat(prev);
      const b = Number.parseFloat(display);
      let result = 0;
      if (op === "÷") result = b !== 0 ? a / b : 0;
      else if (op === "×") result = a * b;
      else if (op === "-") result = a - b;
      else if (op === "+") result = a + b;
      else result = b;
      const res = String(Number.parseFloat(result.toFixed(8)));
      setDisplay(res);
      setPrev("");
      setOp("");
      if (FUNNY_RESPONSES[res]) setFunny(FUNNY_RESPONSES[res]);
      return;
    }

    if (val === "." && display.includes(".")) return;
    setDisplay(display === "0" && val !== "." ? val : display + val);
  };

  const isOperator = (v: string) => ["÷", "×", "-", "+"].includes(v);
  const isSpecial = (v: string) => ["C", "+/-", "%"].includes(v);

  return (
    <div
      className="glass-card-strong p-5 w-full max-w-xs mx-auto"
      data-ocid="calculator_widget"
    >
      {/* Display */}
      <div
        className="rounded-xl p-4 mb-4 text-right"
        style={{
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,245,255,0.15)",
        }}
      >
        <div className="text-xs text-muted-foreground font-mono min-h-4 mb-1">
          {prev && op ? `${prev} ${op}` : ""}
        </div>
        <div className="text-3xl font-mono font-light text-foreground truncate">
          {display}
        </div>
      </div>

      {/* Funny message */}
      <AnimatePresence>
        {funny && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-3 text-center text-xs font-mono rounded-lg px-3 py-2"
            style={{
              background: "rgba(0,245,255,0.1)",
              border: "1px solid rgba(0,245,255,0.2)",
              color: "#00f5ff",
            }}
          >
            {funny}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.flat().map((btn) => (
          <motion.button
            key={btn}
            type="button"
            whileTap={{ scale: 0.93 }}
            onClick={() => handleBtn(btn)}
            data-ocid={`calc_btn_${btn === "⌫" ? "del" : btn === "=" ? "eq" : btn}`}
            className={`h-12 rounded-xl text-sm font-mono font-medium transition-all duration-200 flex items-center justify-center ${
              btn === "0" ? "col-span-1" : ""
            }`}
            style={{
              background:
                btn === "="
                  ? isColorful
                    ? "linear-gradient(135deg, #ff0080, #7928ca)"
                    : "linear-gradient(135deg, rgba(0,245,255,0.3), rgba(124,58,237,0.3))"
                  : isOperator(btn)
                    ? "rgba(124,58,237,0.25)"
                    : isSpecial(btn)
                      ? "rgba(100,100,120,0.4)"
                      : "rgba(255,255,255,0.07)",
              border:
                btn === "="
                  ? `1px solid ${isColorful ? "#ff008066" : "rgba(0,245,255,0.4)"}`
                  : isOperator(btn)
                    ? "1px solid rgba(124,58,237,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
              color:
                btn === "="
                  ? isColorful
                    ? "white"
                    : "#00f5ff"
                  : isOperator(btn)
                    ? "#7c3aed"
                    : isSpecial(btn)
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.85)",
              boxShadow:
                btn === "="
                  ? isColorful
                    ? "0 0 15px #ff008066"
                    : "0 0 15px rgba(0,245,255,0.3)"
                  : "none",
            }}
          >
            {btn === "⌫" ? <Delete size={14} /> : btn}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);
  const { isColorful } = useColorfulMode();

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      const last = new Date(now.getFullYear(), now.getMonth(), 0);
      days += last.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setResult({ years, months, days });
  };

  return (
    <div
      className="glass-card-strong p-6 w-full max-w-xs mx-auto"
      data-ocid="age_calculator_widget"
    >
      <h3 className="font-display font-bold text-center mb-6 gradient-text-cyan-to-purple">
        Age Calculator
      </h3>

      <div className="mb-4">
        <label
          htmlFor="dob-input"
          className="block text-xs text-muted-foreground font-mono mb-2"
        >
          Date of Birth
        </label>
        <input
          id="dob-input"
          type="date"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            setResult(null);
          }}
          data-ocid="age_calc_dob_input"
          className="w-full px-3 py-2.5 rounded-xl text-sm font-mono bg-transparent text-foreground outline-none"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(0,245,255,0.25)",
            colorScheme: "dark",
          }}
        />
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={calculate}
        disabled={!dob}
        data-ocid="age_calc_submit_button"
        className="w-full py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-40"
        style={{
          background: isColorful
            ? "linear-gradient(135deg, #ff0080, #7928ca)"
            : "linear-gradient(135deg, rgba(0,245,255,0.25), rgba(124,58,237,0.25))",
          border: `1px solid ${isColorful ? "#ff008066" : "rgba(0,245,255,0.4)"}`,
          color: isColorful ? "white" : "#00f5ff",
          boxShadow: isColorful
            ? "0 0 20px #ff008066"
            : "0 0 20px rgba(0,245,255,0.2)",
        }}
      >
        Calculate Age
      </motion.button>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 grid grid-cols-3 gap-3"
            data-ocid="age_calc_result"
          >
            {(["years", "months", "days"] as const).map((unit) => (
              <div
                key={unit}
                className="text-center rounded-xl py-4"
                style={{
                  background: isColorful
                    ? "rgba(255,0,128,0.1)"
                    : "rgba(0,245,255,0.08)",
                  border: `1px solid ${isColorful ? "rgba(255,0,128,0.2)" : "rgba(0,245,255,0.2)"}`,
                }}
              >
                <div
                  className="text-2xl font-display font-black"
                  style={{ color: isColorful ? "#ff0080" : "#00f5ff" }}
                >
                  {result[unit]}
                </div>
                <div className="text-xs text-muted-foreground font-mono capitalize mt-1">
                  {unit}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ToolsSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="tools"
      className="relative py-24 px-4"
      data-ocid="tools_section"
      style={{ background: "rgba(0,245,255,0.02)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: "#00f5ff" }}
          >
            — Interactive Tools
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Playground
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-4">
              <h3
                className="font-display font-bold mb-1"
                style={{ color: isColorful ? "#ff0080" : "#00f5ff" }}
              >
                🧠 Smart Calculator
              </h3>
              <p className="text-xs text-muted-foreground">
                With funny easter eggs!
              </p>
            </div>
            <FunnyCalculator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center mb-4">
              <h3
                className="font-display font-bold mb-1"
                style={{ color: isColorful ? "#7928ca" : "#7c3aed" }}
              >
                📅 Age Calculator
              </h3>
              <p className="text-xs text-muted-foreground">
                Find your exact age
              </p>
            </div>
            <AgeCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
