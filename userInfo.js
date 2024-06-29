// userInfo.js
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
let names = ["Alice", "Bob", "Charlie"];
let modifiedNames = ["ALICE", "bob", "CHARLIE"];
console.log(createUserProfiles(names, modifiedNames));
