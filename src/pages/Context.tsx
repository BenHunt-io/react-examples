import React, { useState } from "react";
import Layout from "../Layout";

const AppContext = React.createContext({
  theme: "light",
});

const Context = () => {
  const [context] = useState({
    theme: "dark",
  });

  return (
    <AppContext.Provider value={context}>
      <Layout>
        <ThemedCard />
      </Layout>
    </AppContext.Provider>
  );
};

const ThemedCard = () => {
  return (
    <div className="card">
      <div className="cardBody">
        <h3>Card Body</h3>
        <ThemedButton />
      </div>
    </div>
  );
};

class ThemedButton extends React.Component<any> {
  static contextType = AppContext;

  constructor(props: any) {
    super(props);

    this.getButtonClasses = this.getButtonClasses.bind(this);
    this.getButtonClasses = this.getButtonClasses.bind(this);
  }

  getButtonClasses(): string {
    // @ts-ignore
    if (this.context.theme === "light") {
      return "button btn-light";
    // @ts-ignore
    } else if (this.context.theme === "dark") {
      return "button btn-dark";
    }
    return "button btn-primary";
  }

  toggle(): void {}

  render() {
    return (
      <button className={this.getButtonClasses()} onClick={this.toggle}>
        Toggle
      </button>
    );
  }
}

export default Context;
