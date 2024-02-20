if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/Users/muhammadabdullah/Documents/KodexTech/cfx_quantum_new/node_modules/react-native-reanimated/android/build/intermediates/cxx/RelWithDebInfo/2gv132i3/obj/x86/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/muhammadabdullah/Documents/KodexTech/cfx_quantum_new/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

