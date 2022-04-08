import mongoose from "mongoose";

const macsappSchema = mongoose.Schema({
	message: String,
	name: String,
	timestamp: String,
	received: Boolean,
});

// Collection
export default mongoose.model("messagecontent", macsappSchema);
