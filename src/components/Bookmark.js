import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBookmark, fetchBookmarks } from "../actions/bookmark";
const Bookmark = () => {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.bookmarked);
  const [bookmarkData, setbookmarkData] = useState([]);
  useEffect(() => {
    if (names) setbookmarkData(names);
  }, [names]);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, []);

  const handleDelete = (i) => {
    dispatch(deleteBookmark(i));
  };
  return (
    <>
      {bookmarkData?.map((item, i) => {
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

                <div class="right-btn">
                  <button
                    type="submit"
                    class="btn btn-primary button "
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

export default Bookmark;
