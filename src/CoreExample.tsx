import * as React from "react";
import { Button, Intent, Slider } from "@blueprintjs/core";

import { Example } from "./Example";

interface CoreExampleState {
  sliderValue: number;
}

export class CoreExample extends React.PureComponent<{}, CoreExampleState> {
  public state = {
    sliderValue: 11
  };

  public render() {
    return (
      <Example header="Core Sandbox">
        <h3>Buttons:</h3>
        <Button intent={Intent.PRIMARY} text="Primary" />
        <Button intent={Intent.WARNING} text="Warn" />
        <Button intent={Intent.DANGER} text="Danger" />
        <h3>Turn it up to 11:</h3>
        <Slider
          min={0}
          max={11}
          onChange={this.setSliderValue}
          value={this.state.sliderValue}
        />
      </Example>
    );
  }

  private setSliderValue = (value: number) => {
    this.setState({
      sliderValue: value
    });
  };
}
