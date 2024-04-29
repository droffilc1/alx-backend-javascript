export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within bounds
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create DataView on the buffer
  const int8view = new DataView(buffer);

  // Set the value at the specified position
  int8view.setInt8(position, value);

  // Return the read value
  return int8view;
}
