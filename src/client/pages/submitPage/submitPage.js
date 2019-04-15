import React, { Component } from 'react';
import "./submitPage.css";

class SubmitPage extends Component {
    constructor() {
        super();
        this.handle_ref = React.createRef(); //just for resetting input field to ""
        this.content_ref = React.createRef(); //just for resetting input field to ""
        this.state = {
            handle: "",
            content: ""
        };
    }

    discardForm = () => {
        this.setState({handle: "", content: ""});
        this.handle_ref.current.value = "";
        this.content_ref.current.value = "";
    }

    //updates form, imports file
    updateFormData = (event) => {
        if (event.target.name === "handle") {
            this.setState({handle: event.target.value});
        } else if (event.target.name === "content") {
            this.setState({content: event.target.value});
        }
    }

    //post/submit a song to server
    postContent = async () => {
        console.log("posting content...");

        let postedContent = {
            handle: this.state.handle,
            content: this.state.content
        }

        this.discardForm();

        await fetch('http://localhost:8080/postContent', {// postSong { credentials: 'include' } if using cookies and such
            method: 'POST',
            body: JSON.stringify(postedContent),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                console.log("Did not send...");
                throw new Error("Failed...");
            }
            console.log("Status: " + res.status);
            console.log(res);
            console.log("Sent!");
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="submit_form">
                <div className="form_block">
                    <div className="form_section">
                        <label className="form_label_1" htmlFor="form_handle">Handle:</label>
                        <input className="input_1" name="handle" type="text" id="form_handle"
                            onChange={this.updateFormData} ref={this.handle_ref}/>
                    </div>
                    <div className="form_section">
                        <label className="form_label_2" htmlFor="form_content">Content:</label>
                        <input className="input_2" name="content" type="text" id="form_content"
                            onChange={this.updateFormData} ref={this.content_ref}/>
                    </div>
                </div>

                <div className="btns">
                    <button className="btn1" onClick={this.postContent}>Submit</button>
                    <button className="btn2" onClick={this.discardForm}>Discard</button>
                </div>
            </div>
        );
    }
}

export default SubmitPage;
