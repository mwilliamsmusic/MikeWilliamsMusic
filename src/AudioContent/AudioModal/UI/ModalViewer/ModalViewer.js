import React, {Fragment} from 'react';
import AlbumListing from '../AlbumListing/AlbumListing';
import Modal from '../Modal/Modal'
import ButtonController from '../ButtonController/ButtonController';
import {albumObjects} from "../../../Albums";


class ModalViewer extends React.Component {
    constructor(props) {
        super(props);

        {/* Pass skill props and modal visibility to true or false. Albums.js handles track listings*/}
            this.state = {


                showModal: false,
            };
    };

    showModalHandler = () => {
        this.setState({showModal:true});
    };

    closeModalHandler = () => {
        this.setState({showModal:false});
    };

    render() {
        return(

            <Fragment>
                <Modal show={this.state.showModal} closeModal={this.closeModalHandler}>
                    {/* Pass skills from this.state objects*/}
                    <AlbumListing tracks={albumObjects.albums.inReview} title={albumObjects.albumName.in_Review}/>
                </Modal>

                {/* sends showAlbum value as props to ButtonController where button code resides
                When Button is clicked, showModalHandler method will execute.
                */}
                <ButtonController showAlbum={this.showModalHandler} buttonTitle={albumObjects.albumName.in_Review}/>

            </Fragment>

            )
        }
}

export default ModalViewer;