//declare the module.export for nodeschool and create checkUsersValid Function
module.exports = function checkUsersValid(goodUsers) {
	//returning the results of all allUsersValid Function
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }