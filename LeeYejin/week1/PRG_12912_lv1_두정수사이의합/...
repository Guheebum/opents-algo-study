#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(int a, int b) {
    long long answer = 0;
    int start = a < b ? a : b;
    int finish = a < b ? b : a;
    
    for (int i = 0; (finish - start) + 1 > i; i ++){
        answer = answer + start + i;   
    }
    
    return answer;
}
