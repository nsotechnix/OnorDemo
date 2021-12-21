if (props.auth.isAlsoSeller) {
    console.log(`LISTENER_ATTACHED ${messageCollectionDocId}`);
    unsubscribe = db
        .collection("messages")
        .doc(messageCollectionDocId)
        .collection(messageCollectionDocId)
        .where("senderId", "==", userId)
        .onSnapshot((querySnapshot) => {
            console.log("CHAT_IS_REFRESHED_BY_FIREBASE_MERCHANT_SIDE");
            console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
            // console.log(currChatData)
            console.log(querySnapshot);
            handleGetAllChatMessage(userId, productId, identifierTS);
        });
} else {
    unsubscribe = db
        .collection("messages")
        .doc(messageCollectionDocId)
        .collection(messageCollectionDocId)
        .where("receiverId", "==", merchantId)
        .onSnapshot((querySnapshot) => {
            console.log("CHAT_IS_REFRESHED_BY_FIREBASE_CUSTOMER_SIDE");
            console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
            // console.log(currChatData)
            querySnapshot.docs.map((doc) => {
                console.log(doc.data());
            });
            handleGetAllChatMessage(merchantId, productId, identifierTS);
        });
}