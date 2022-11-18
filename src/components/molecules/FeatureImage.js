import React, { Component } from 'react'

export default class FeatureImage extends Component {
    state = {
    file: null,
    base64URL: ""
  };

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);
        this.setState({
          base64URL: result,
          file
        });
        //send to parent
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };

  render() {
    return (
      <div className='mt-14 mb-14'>
        <label for="img" class="border-2 px-10 py-8 text-5xl m-4 rounded-xl">+</label>
        <input type="file" id='img' style={{display:"none"}} name="file" onChange={this.handleFileInputChange} />
        {/* <p>{this.state.file}</p> */}
      </div>
    );
  }
}
