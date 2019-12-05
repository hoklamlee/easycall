import React from 'react';
import './CustomStepper.css'
const Step = ( props ) =>
    <div className="Stepper__step">
        <div className="Stepper__indicator">
            <span className="Stepper__info">{props.indicator}</span>
        </div>
        <div className="Stepper__label">{props.title}</div>
        <div className="Stepper__panel">
            {props.children}
        </div>
    </div>;

// Overlay
const Stepper = ( props ) =>
    <div className={`Stepper ${props.isVertical ? 'Stepper--vertical' : ''} ${props.isInline ? 'Stepper--inline' : ''}`}>
        {props.children}
    </div>;

export default class CustomStepper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTabIndex : 0
        };

    };

    showActiveStep = (tabIndex) => {
        // currentPanel.style.display = "none";
        // parent[newPanelIndex].style.display = "block";
    };

    render() {
        return (
            <div style={{position:'relative'}}>
                {/*<Stepper>*/}
                {/*    <Step indicator="1" title="Step 1">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*    <Step indicator="2" title="Step 2">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*    <Step indicator="3" title="Step 3">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*</Stepper>*/}

                <Stepper isVertical>
                    <Step indicator="1" title="Step 1">
                        <div className="Content">
                            <button>Prev</button>
                            <button>Next</button>
                        </div>
                    </Step>
                    <Step indicator="2" title="Step 2">
                        <div className="Content">
                            <button>Prev</button>
                            <button>Next</button>
                        </div>
                    </Step>
                    <Step indicator="3" title="Step 3">
                        <div className="Content">
                            <button>Prev</button>
                            <button>Next</button>
                        </div>
                    </Step>
                </Stepper>

                {/*<Stepper isInline>*/}
                {/*    <Step indicator="1" title="Step 1">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*    <Step indicator="2" title="Step 2">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*    <Step indicator="3" title="Step 3">*/}
                {/*        <div className="Content">*/}
                {/*            <button>Prev</button>*/}
                {/*            <button>Next</button>*/}
                {/*        </div>*/}
                {/*    </Step>*/}
                {/*</Stepper>*/}

            </div>
        );
    }
}
