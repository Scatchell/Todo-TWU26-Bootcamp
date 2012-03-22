var problem2 = function(){

var sum = 0;
var secondToLast = 1;
var last = 1;

function calculateFib () {
    temp = secondToLast;
    secondToLast = last;
    last = temp + secondToLast;
}

	while (last < 4000000)
	{
        if (last%2 == 0)
        {
            sum += last;

        }

        calculateFib();

	}

	return sum;
}