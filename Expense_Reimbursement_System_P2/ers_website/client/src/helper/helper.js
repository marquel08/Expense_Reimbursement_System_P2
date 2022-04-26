import  _ from 'lodash';

export function getSum(ers_reimbursement, type){
    let sum = _(ers_reimbursement)
                      .groupBy("type")
                      .map((objs, key) => {
                        if(!type) return _.sumBy(objs, 'amount'); // [300, 350, 500]
                        return {
                            'type' : key,
                            'color' : objs[0].color,
                            'total' : _.sumBy(objs, 'amount')
                        }
                      })
                      .value()
    return sum;
}

export function getLabels(ers_reimbursement){
    let amountSum = getSum(ers_reimbursement, 'type');
    let Total = _.sum(getSum(ers_reimbursement));

    let  percent = _(amountSum)
                            .map(objs => _.assign(objs, { percent : (100 * objs.total)  / Total}))
                            .value()

    return percent;
}

export function chart_Data(ers_reimbursement, custom){

    let bg = _.map(ers_reimbursement, a => a.color)
    bg = _.uniq(bg)
    let dataValue = getSum(ers_reimbursement)

    const config = {
        data : {
          datasets: [{
              data: dataValue,
              backgroundColor: bg,
              hoverOffset: 4,
              borderRadius : 30,
              spacing: 10
            }]
        },
        options : {
            cutout: 115
        }
    }

    return custom ?? config;

}

export function getTotal(ers_reimbursement){
    return _.sum(getSum(ers_reimbursement));
}