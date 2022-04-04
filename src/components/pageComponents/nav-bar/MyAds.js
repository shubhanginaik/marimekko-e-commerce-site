import React from "react";

import { auth, db } from "../../../firebase";
import SingleItem from "../../exploreitems/SingleItem";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
const MyAds = () => {
  const [items, setItems] = useState([]);
  const [user, loading] = useAuthState(auth);
  const fetchProducts = async () => {
    const response = db.collection("sellcontact");
    response.onSnapshot((querySnapShot) => {
      const saveFirebaseProducts = [];
      querySnapShot.forEach((doc) => {
        saveFirebaseProducts.push(doc.data());
      });
      setItems(saveFirebaseProducts);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const itemsFilter = items.filter((item) => {
    console.log("item", item);
    console.log("item id", item.id);
    if (user) {
      return item.email === user.email;
    }
  });
  return (
    //     <div>
    //       {items && items.map((item) => <SingleItem key={item.id} {...item} />)}
    //     </div>

    //   );
    // };
    <div>
      {user ? (
        <div>
          {items &&
            itemsFilter.map((item) => <SingleItem key={item.id} {...item} />)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyAds;
