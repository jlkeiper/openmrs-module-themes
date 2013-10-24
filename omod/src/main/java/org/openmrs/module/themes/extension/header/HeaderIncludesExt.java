/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */

package org.openmrs.module.themes.extension.header;

import org.openmrs.module.web.extension.HeaderIncludeExt;

import java.util.Arrays;
import java.util.List;

public class HeaderIncludesExt extends HeaderIncludeExt {

	@Override
	public List<String> getHeaderFiles() {
		return Arrays.asList(
				"/ms/uiframework/resource/uicommons/scripts/jquery-1.8.3.min.js",
				"/ms/uiframework/resource/uicommons/scripts/jquery-ui-1.9.2.custom.min.js",
				"/ms/uiframework/resource/uicommons/scripts/underscore-min.js",
				"/ms/uiframework/resource/uicommons/scripts/knockout-2.1.0.js",
				"/ms/uiframework/resource/uicommons/scripts/emr.js",
				"/ms/uiframework/resource/uicommons/scripts/jquery.toastmessage.js",
				"/ms/uiframework/resource/uicommons/scripts/jquery.simplemodal.1.4.4.min.js",
				"/ms/uiframework/resource/uicommons/styles/styleguide/jquery-ui-1.9.2.custom.min.css",
				"/ms/uiframework/resource/uicommons/styles/styleguide/jquery.toastmessage.css",
				"/ms/uiframework/resource/referenceapplication/styles/referenceapplication.css",
				"/moduleResources/themes/css/base-2.0.css",
				"/moduleResources/themes/js/base-2.0.js"
		);
	}
}
