import React, { Component } from 'react'
import { MdCancel } from 'react-icons/md';
import { BsImages } from 'react-icons/bs';




export default class FeatureImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            base64URL: ""
        };
    }

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
                this.props.setImage(result);
                console.log("File Is", file);
                this.setState({
                    base64URL: result,
                    file
                });
                //send to parent
                document.getElementById('img').value = ''
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
            <div className='inline-block'>
                <div className='mt-14 flex'>
                    <label htmlFor="img" className="border-2 px-10 py-8 text-5xl m-4 rounded-xl relative cursor-pointer">
                        +
                        <p className='text-xs absolute bottom-2 left-2 text-gray-400'>Featuring Image</p></label>
                    <input type="file" id='img' style={{ display: "none" }} name="file" onChange={this.handleFileInputChange} />
                    {
                        this.state.base64URL
                            ?
                            <div className='relative'>
                                <img src={this.state.base64URL} className="border-2 m-4 rounded-xl text-center text-red-600" style={{ maxHeight: "115px", maxWidth: "150px", height: "115px", width: "115px" }} alt="File not supported"></img>
                                <span className=''>
                                    <p className='absolute left-6 text-xs'>Name : <span className=''>{this.state.file.name}</span></p>
                                    <button className='absolute top-6 right-6'
                                        onClick={() => {
                                            this.setState({
                                                file: null,
                                                base64URL: ""
                                            })
                                            this.props.setImage("");
                                        }}
                                    ><MdCancel></MdCancel ></button>
                                </span>
                            </div>
                            :
                            <>
                                <div className='relative'>
                                    <BsImages className="border-2 m-4 rounded-xl text-center " style={{ maxHeight: "115px", maxWidth: "150px", height: "115px", width: "115px" }} ></BsImages>
                                    <p className='absolute left-8 text-xs'>Default Image</p>
                                </div>
                            </>}

                </div>
            </div>
        );
    }
}
