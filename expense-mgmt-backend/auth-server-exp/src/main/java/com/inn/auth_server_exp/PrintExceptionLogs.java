package com.inn.auth_server_exp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PrintExceptionLogs {
    
    private static Logger log;

    @SuppressWarnings("rawtypes")
    public static void printException(Class className, String methodName, Exception ex) {
        log = LoggerFactory.getLogger(className);
        log.error("Error Occured Inside @class {} @method {}", className.getSimpleName(), methodName, ex);
    }
}
