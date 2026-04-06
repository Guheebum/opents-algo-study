def solution(wallet, bill):
    answer = 0
    
    if wallet[0] > wallet[1]:
        tmp = wallet[1]
        wallet[1] = wallet[0]
        wallet[0] = tmp
        
    while True:
        if bill[0] > bill[1]:
            tmp = bill[1]
            bill[1] = bill[0]
            bill[0] = tmp
        
        if not (bill[0] > wallet[0] or bill[1] > wallet[1]) :
            break;
        bill[1] = bill[1] // 2
        answer += 1
    return answer
