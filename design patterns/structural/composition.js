exports.compose = (...functions) => input => functions.reduceRight(async (chain, func) => await chain.then(func), Promise.resolve(input));

exports.pipe= (...fns)=>{
    fns.reduce(
        (result,fn)=>(result.then && result.then(fn)||fn(result)),param
    )
}