const convertDateIntoAge = (value) => {
    var dob = new Date(value.seconds * 1000);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    console.log(age);
    return age;
};

const cmTofeet = (n) => {
    var realFeet = (n * 0.3937) / 12;
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + "''";
};

const getBMIValue = (height, weight) => {
    const bmi = !!height ? parseFloat(
        (Math.floor(!!weight ? weight : 0) /
            (!!height
                ? height * height
                : 0)) *
        10000
    ).toFixed(2) : "-"
    return bmi
}

const customSort = (obj1, obj2) => {
    const arr1 = obj1.start_date.split(' ')
    const arr2 = obj2.start_date.split(' ')
    console.log(obj1, obj2)
    if (arr1[2] !== arr2[2]) {
        return arr2[2] - arr1[2]
    }
    if (arr1[1] !== arr2[1]) {
        return arr2[1] - arr1[1]
    }
    return arr2[0] - arr1[0]
}

const numberToMonthName = (monthNumber) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'June', 'July', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return months[monthNumber - 1];

}

module.exports = { convertDateIntoAge, getBMIValue, cmTofeet, customSort, numberToMonthName }