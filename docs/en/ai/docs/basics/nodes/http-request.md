---
sidebar_position: 15
title: "Http Request"
---

## Node Overview

**Node name**: Http Request  
**Supported scenarios**: Chatflow Agent (supported), Workflow Agent (supported)  

## Feature Description

The Http Request node accesses HTTP endpoints to fetch data. It provides powerful HTTP request capabilities, supporting various HTTP methods and request configurations, and can interact with external APIs to fetch and process data.

## Node Display Content

![HTTP Request node on the canvas: node icon and name, left/right connection points, and floating test run and more buttons at the top](./images/15-1-%E8%8A%82%E7%82%B9%E5%B1%95%E7%A4%BA.png)

### 1. Basic Information Display
- **Icon**: node-specific icon
- **Name**: node name
- **Note**: explanatory text added by the user

### 2. Action Buttons
- **More button**: click to display the context menu content
- **Run button**: click to enter the test run interface

## Node Edit Panel

![HTTP Request edit panel: API (request method + URL, with variable insertion and cURL import), HEADERS/PARAMS key-value pairs, BODY types (none/form-data/x-www-form-urlencoded/json/raw-text), and output variables body/status_code/headers/files](./images/15-2-%E8%8A%82%E7%82%B9%E9%85%8D%E7%BD%AE.png)

### 1. API Configuration
- **Request method**: select the HTTP method from a dropdown (GET, POST, PUT, DELETE, PATCH, etc.)
- **Request URL**: set the URL of the target API; type `/` to insert a variable
- **Import cURL**: paste a cURL command to generate the request configuration in one click

### 2. HEADERS / PARAMS
- **HEADERS**: configure HTTP request headers as key-value pairs (configure authentication for protected endpoints here, e.g., `Authorization: Bearer <token>`)
- **PARAMS**: configure URL query parameters as key-value pairs

### 3. BODY Configuration
- **Type selection**: none / form-data / x-www-form-urlencoded / json / raw-text
- **Request body**: set the request body content according to the selected type

### 4. Output Variables
- **body** (string): the response content
- **status_code** (number): the response status code
- **headers** (object): the response header list as JSON
- **files** (array[file]): the file list

### 5. Next Step Configuration
- Adding a next node is supported

## Execution Logic

The execution logic of the Http Request node is implemented by the backend to ensure HTTP requests are executed and responses are handled correctly.

## Context Menu Actions

The context menu contains the following options:
1. **Change node**: change the node type
2. **Copy**: copy the node
3. **Duplicate**: duplicate the node content
4. **Delete**: delete the node
5. **Help link**: jump to the help documentation
6. **Run node**: test-run the current node

## Test Run

- **Support status**: test run supported
- **Change node**: changing the node type is supported
- **Copy features**: copy, cut, and delete operations are supported

## HTTP Method Support

### 1. GET Requests
- **Purpose**: fetch data
- **Characteristics**: no request body; parameters are passed via the URL
- **Examples**: fetching user information, querying data

### 2. POST Requests
- **Purpose**: create data
- **Characteristics**: has a request body, used to submit data
- **Examples**: creating a user, submitting a form

### 3. PUT Requests
- **Purpose**: update data
- **Characteristics**: fully updates a resource
- **Examples**: updating user information, modifying configuration

### 4. DELETE Requests
- **Purpose**: delete data
- **Characteristics**: deletes the specified resource
- **Examples**: deleting a user, removing data

### 5. PATCH Requests
- **Purpose**: partial updates
- **Characteristics**: updates only some fields
- **Examples**: updating user status, modifying partial information

## Use Cases

### 1. API Integration
- **Third-party services**: integrate third-party API services
- **Data fetching**: fetch data from external systems
- **Service calls**: call microservice endpoints
- **Data synchronization**: sync data with external systems

### 2. Data Exchange
- **Data push**: push data to external systems
- **Data pull**: pull data from external systems
- **Data conversion**: convert data formats
- **Data validation**: validate data

### 3. Business Processes
- **Workflow integration**: integrate external workflows
- **Approval processes**: call approval systems
- **Notification services**: send notification messages
- **Logging**: record operation logs

### 4. System Integration
- **Single sign-on**: integrate SSO systems
- **User management**: integrate user management systems
- **Permission control**: integrate permission management systems
- **Monitoring and alerts**: integrate monitoring systems

## Authentication

The node has no dedicated authentication configuration section; protected endpoints are configured via **HEADERS / PARAMS**:

- **Basic Auth**: add `Authorization: Basic base64(username:password)` to HEADERS
- **Bearer Token**: add `Authorization: Bearer <token>` to HEADERS
- **API Key**: pass it in HEADERS or PARAMS as the endpoint requires

## Best Practices

### 1. Request Design
- **URL design**: use RESTful-style URLs
- **Parameter passing**: use URL parameters and the request body appropriately
- **Status codes**: use HTTP status codes correctly
- **Error handling**: provide clear error information

### 2. Security Considerations
- **HTTPS**: use the HTTPS protocol
- **Authentication**: use secure authentication methods
- **Parameter validation**: validate input parameters
- **Sensitive information**: protect sensitive information

### 3. Error Handling
- **Status code checks**: use the `status_code` output variable downstream (e.g., in IF Else) to determine whether the request succeeded
- **Degradation handling**: design fallback logic for the failure branch

## Configuration Steps

### 1. Basic Configuration
1. Choose the HTTP method
2. Set the request URL
3. Configure the request headers

### 2. Request Body Configuration
1. Choose the content type
2. Set the request body content
3. Configure the parameters

### 3. Testing and Validation
1. Test using the test run feature
2. Check the response data
3. Verify the error handling

## FAQ

### Q: How do I handle authentication failures?
A: Check whether the authentication header format and credentials in HEADERS are correct (e.g., whether the Bearer Token is valid or expired).

### Q: How do I debug HTTP requests?
A: Use the test run feature to view the request and response details, and check the status code and error messages.

### Q: What BODY types are supported?
A: Five types: none, form-data, x-www-form-urlencoded, json, and raw-text.

## Considerations

1. **URL encoding**: make sure URL parameters are encoded correctly
2. **Request headers**: set the correct Content-Type
3. **Credentials**: keep authentication information secure; avoid leaking it in prompts or output
4. **Error handling**: use status_code to evaluate the result and design fallback branches for failure cases
