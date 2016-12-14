//Control Flow Using Conditional Statements

//1. Use blocks to group statements:
    //Example of block statements:
        const c = 5;
        {
            const c = 20; 
        }
        console.log(c);


//2. Use if... else and switch statements:
    //Example of an if... else statement:
        if (10 = 10) {
            greeting = "The number ten!";
        }
    //Example of a switch statement:
        switch (val) {
            case 1:
                console.log("alpha");
                answer = "alpha";
                break;
            case 2:
                console.log("beta");
                answer = "beta";
                break;
            case 3:
                console.log("gamma");
                answer = "gamma";
                break;
            case 4:
                console.log("delta");
                answer = "delta";
                break;
        }
  

//3. Throw exceptions using throw statements:
    //Example of throw statement usage:
        throw "This is an error message!"; 


//4. Use try... catch block to respond and catch thrown exceptions:
    //Example of a try... catch to print an error message when an error occurs:
        try {
            functionThrowingAlert("Alert!");
        }
        catch(err) {
            logger.log("Error was thrown!", err);
        }