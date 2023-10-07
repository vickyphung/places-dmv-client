import React, { useState } from "react";
import axios from "axios";
import "../style.css";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddReview = (props) => {
  
  console.log(props.userId);
  console.log(props.placeId);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fakeUserId = "633f3b441673cfa3030031eb";
  const [reviewFormData, setReviewFormData] = useState({
    review: "",
  });

  const [response, setResponse] = useState();

  const handleChange = (event) => {
    setReviewFormData({
      ...reviewFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://placeswithbear.herokuapp.com/review/`,
      {
        // user: `${props.userId}`,
        user: `${fakeUserId}`,

        place: `${props.placeId}`,
        review: reviewFormData.review,
      }
    );
    console.log(response);
    setResponse(response);
    localStorage.setItem("jwtToken", response.data.jwtToken);
    navigate("/places");
    
  };

  return (
    <div>
      <button onClick={onOpen} title="leave a review">
        💬 review
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="reviewModal">
            <ModalHeader>
              <h1>Add Review</h1>
            </ModalHeader>
            <ModalBody className="modalBody">
              <form onSubmit={handleSubmit}>
                <textarea
                  className="addReviewText"
                  name="review"
                  id="review"
                  onChange={handleChange}
                />
                <div>
                  <Button
                    className="reviewSubmitBtn"
                    colorScheme="purple"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
      {console.log(response)}
    </div>
  );
};

export default AddReview;
