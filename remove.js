        function deleteTask(aufgaben, item) {
          aufgaben.forEach((element, i) => {
            if (element.aufgabe == item) {
              aufgaben.splice(i, 1);
            }
          });
        }

        module.exports = deleteTask;
