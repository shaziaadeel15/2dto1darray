
/// convert 2d array to 1d and find min and maxvalue
exports.convert2dto1d = (req, res) => {

    if(req===undefined 
		|| req.query===undefined
		|| req.query.input === undefined) /// Check validity of input parameters
	{
		res.status(400).json({ Error: `Error in input parameter`});
	}
	else
	{
        let arr = [];
        let output=[];
        try{
            ///parse input into array
            arr = JSON.parse(req.query.input);
            console.log("arr="+arr);

            ///concat all array element in single array
            output = [].concat.apply([], arr);
        }
        catch( e)
        {
            res.status(400).json({ Error: `Error in input paramter, expecting 2d array in "input" parameter`});
            return;
        }
        ///find min and max from result
        let min=output[0];
        let max=output[0];
        for(let i=1;i<output.length;i++)
        {
           min = (output[i] < min) ? output[i]:min;
           max = (output[i] > max) ? output[i]:max;
        }
        ///send result back
        res.status(200).json({
            output: output,
            min : min,
            max : max
            });
    }
}