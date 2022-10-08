import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRestaurants, fetchRestaurants } from "../actions/restaurant";
import { addBookmark } from "../actions/bookmark";
const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const names = useSelector((state) => state.restaurants);
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    if (names) setRestaurantData(names);
  }, [names]);

  useEffect(() => {
    console.log("Restaurant first");
    dispatch(fetchRestaurants());
  }, []);

  const handleDelete = (i) => {
    dispatch(deleteRestaurants(i));
  };
  const handleBookmark = (name) => {
    dispatch(addBookmark(name));
    navigate("/bookmarks");
  };
  return (
    <>
      {restaurantData?.map((item, i) => {
        return (
          <>
            <div class="card" style={{ width: "40rem", margin: "5rem" }}>
              <center>
                <iframe
                  title="test"
                  width="600"
                  height="450"
                  src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${item}%22%7D`}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </center>
              <div class="card-body">
                <center>
                  <h5 class="card-title">{`${item}`}</h5>
                </center>

                <div class="left-btn">
                  <button
                    type="submit"
                    class="btn btn-primary button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleBookmark(item);
                      handleDelete(i);
                    }}
                  >
                    bookmark
                  </button>
                </div>
                <div class="right-btn">
                  <button
                    type="submit"
                    class="btn btn-primary button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(i);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
