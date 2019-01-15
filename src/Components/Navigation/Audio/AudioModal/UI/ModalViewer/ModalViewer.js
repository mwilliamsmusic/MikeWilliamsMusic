import React, {Fragment} from 'react';
import AlbumListing from '../AlbumListing/AlbumListing';
import Modal from '../Modal/Modal'
import ButtonController from '../ButtonController/ButtonController';

class ModalViewer extends React.Component {
    constructor(props) {
        super(props);

        {/* Pass skill props and modal visibility to true or false*/}
            this.state = {
                Ian: {
                    skill1: 1,
                    skill2: 2
                },
                showModal: false
            };
    }

    showModalHandler = () => {
        this.setState({showModal:true});
    };

    closeModalHandler = () => {
        this.setState({showModal:false});
    };

    render() {
        return(
        <div>
            <Fragment>
                <Modal show={this.state.showModal} closeModal={this.closeModalHandler}>
                    {/* Pass skills from this.state objects*/}
                    <AlbumListing skills={this.state.Ian}/>
                </Modal>

                {/* sends showSkills value as props to ButtonController where button code resides
                When Button is clicked, showModalHandler method will execute.
                */}
                <ButtonController showSkills={this.showModalHandler}/>

            </Fragment>
        </div>
            )
        }
}

export default ModalViewer;