// ======================
// PURE
// ======================

function generateId(userName) {
  const id = "id_" + userName;
  return id;
}

// ======================
// NOT PURE
// ======================

function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

// ======================
// NOT PURE - SIDE EFFECT
// ======================

let lastAssignedId;

function generateId(userName) {
  const id = "id_" + userName;
  lastAssignedId = id;
  return id;
}
