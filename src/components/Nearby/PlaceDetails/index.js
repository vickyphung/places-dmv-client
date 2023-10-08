import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import AddFromMaps from "../AddFromMaps";

import {
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PlaceDetails = (props) => {
  console.log("deatils ID " + props.detailsId);
  const [details, setDetails] = useState([]);
  const [addFromMap, setAddFromMap] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { isReviewOpen, onReviewOpen, onReviewClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      if (props.detailsId) {
        const response = await axios.get(
          `https://placeswithbear.herokuapp.com/search/details/${props.detailsId}`

          // `http://localhost:8800/search/details/${props.detailsId}`

        );
        console.log(response);
        setDetails(response.data.result);
        const detailResponse = response.data.result;
        setAddFromMap({
          name: detailResponse.name,
          address: detailResponse.address_components,
          url: detailResponse.website,
          mapsId: detailResponse.place_id,
        });
      }
    };
    fetchData();
  }, [props.detailsId]);

  return (
    <Container>
      <div className="mapResults">
        {console.log(details)}
        {console.log(addFromMap)}
        

      <a href={details.website} className="siteLink">
        <span className="placeName">{details.website}</span>
          </a>
          
        <p>{details.business_status}</p>

        {details?.address_components?.map((result, index) => {
          return (
            <div key={index} className="category">
              {result.short_name}
            </div>
          );
        })}
        <span className="subtitle">Phone:</span>

        <p>{details.formatted_phone_number}</p>
        <span className="subtitle">Hours:</span>
        {details?.opening_hours?.weekday_text?.map((text, index) => {
          return (
            <div key={index} className="category">
              <p>{text}</p>
            </div>
          );
        })}

        {details?.types?.map((type, index) => {
          return (
            <div key={index} className="category">
              <p>
                <span className="subtitle">Type:</span> {type}
              </p>
            </div>
          );
        })}

        <p>
          <span className="subtitle">Rating:</span> {details.rating}
        </p>

        <span className="subtitle">Reviews: </span>

        {details?.reviews?.map((review, index) => {
          return (
            <div key={index} className="category">
              <p>{review.text}</p>
              <p>{review.author_url}</p>
            </div>
          );
        })}

        <Button onClick={onOpen}>Add To Places</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add To Places</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              
              <AddFromMaps 
              postFormData={addFromMap.address}
              placeName={addFromMap.name}
              url={addFromMap.url}

              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </Container>
  );
};

export default PlaceDetails;
