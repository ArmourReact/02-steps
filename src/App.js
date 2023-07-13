import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <>
      <button onClick={() => setIsOpen((o) => !o)} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button onClick={handlePrevious} color="#7950f2" text="#FFF">
              <span>👈</span> Previous
            </Button>
            <Button onClick={handleNext} color="#7950f2" text="#FFF">
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const Button = ({ text, color, onClick, children }) => {
  return (
    <button style={{ backgroundColor: color, color: text }} onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
