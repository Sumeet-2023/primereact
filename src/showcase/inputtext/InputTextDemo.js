import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class InputTextDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="inputText" showInputStyle>
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <InputText value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} />
                        <span className="p-ml-2">{this.state.value1}</span>

                        <h5>Floating Label</h5>
                        <span className="p-float-label">
                            <InputText id="username" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                            <label htmlFor="username">Username</label>
                        </span>

                        <h5>Left Icon</h5>
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" />
                            <InputText value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} placeholder="Search" />
                        </span>

                        <h5>Right Icon</h5>
                        <span className="p-input-icon-right">
                            <i className="pi pi-spin pi-spinner" />
                            <InputText value={this.state.value4} onChange={(e) => this.setState({value4: e.target.value})} />
                        </span>

                        <h5>Help Text</h5>
                        <div className="p-field">
                            <label htmlFor="username1" className="p-d-block">Username</label>
                            <InputText id="username1" aria-describedby="username1-help" className="p-d-block"/>
                            <small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>
                        </div>

                        <h5>Invalid</h5>
                        <div className="p-field">
                            <label htmlFor="username2" className="p-d-block">Username</label>
                            <InputText id="username2" aria-describedby="username2-help" className="p-invalid p-d-block" />
                            <small id="username2-help" className="p-invalid p-d-block">Username is not available.</small>
                        </div>

                        <h5>Disabled</h5>
                        <InputText value={this.state.value5} disabled />

                        <h5>Sizes</h5>
                        <div className="sizes">
                            <InputText type="text" className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
                            <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
                            <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
                        </div>
                    </div>
                </div>

                <InputTextDoc />
            </div>
        )
    }
}

class InputTextDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';

export class InputTextDemo extends Component {

    constructor() {
        super();
        this.state = {
            value1: '',
            value2: '',
            value3: ''
        };
    }

    render() {
        return (
            <div>
                <h3 className="first">Basic</h3>
                <InputText value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} />
                <span style={{marginLeft:'.5em'}}>{this.state.value1}</span>

                <h3>Floating Label</h3>
                <span className="p-float-label">
                    <InputText id="float-input" type="text" size={30} value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                    <label htmlhtmlFor="float-input">Username</label>
                </span>

                <h3>KeyFilter - Positive Number Only</h3>
                <InputText type="text" keyfilter="pint" value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';

const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <h3 className="first">Basic</h3>
            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
            <span style={{marginLeft:'.5em'}}>{value1}</span>

            <h3>Floating Label</h3>
            <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} value={value2} onChange={(e) => setValue2(e.target.value)} />
                <label htmlhtmlFor="float-input">Username</label>
            </span>

            <h3>KeyFilter - Positive Number Only</h3>
            <InputText type="text" keyfilter="pint" value={value3} onChange={(e) => setValue3(e.target.value)} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';

const InputTextDemo = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    return (
        <div>
            <h3 className="first">Basic</h3>
            <InputText value={value1} onChange={(e) => setValue1((e.target as HTMLInputElement).value)} />
            <span style={{marginLeft:'.5em'}}>{value1}</span>

            <h3>Floating Label</h3>
            <span className="p-float-label">
                <InputText id="float-input" type="text" size={30} value={value2} onChange={(e) => setValue2((e.target as HTMLInputElement).value)} />
                <label htmlhtmlFor="float-input">Username</label>
            </span>

            <h3>KeyFilter - Positive Number Only</h3>
            <InputText type="text" keyfilter="pint" value={value3} onChange={(e) => setValue3((e.target as HTMLInputElement).value)} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight lang="js">
{`
import {InputText} from 'primereact/inputtext';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
<CodeHighlight>
{`
<InputText value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />

`}
</CodeHighlight>

                        <h3>Float Label</h3>
                        <p>A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.</p>
                        <CodeHighlight>
                            {`
<span className="p-float-label">
    <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
    <label htmlhtmlFor="in">Username</label>
</span>

`}
                        </CodeHighlight>

                        <h3>KeyFilter</h3>
                        <p>InputText has built-in key filtering support to block certain keys, refer to <Link to="/keyfilter">keyfilter</Link> page for more information.</p>

                        <h3>Properties</h3>
                        <p>InputText passes any valid attribute to the underlying input element. Extended properties are as follows;</p>
                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>keyfilter</td>
                                        <td>string/regex</td>
                                        <td>null</td>
                                        <td>Format definition of the keys to block.</td>
                                    </tr>
                                    <tr>
                                        <td>validateOnly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, instead of blocking keys, input is validated internally to test against the regular expression.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-inputtext</td>
                                        <td>Input element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="InputTextDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
