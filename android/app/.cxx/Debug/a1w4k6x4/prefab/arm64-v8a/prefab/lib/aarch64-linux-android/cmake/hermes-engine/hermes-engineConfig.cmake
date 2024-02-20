if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/muhammadabdullah/.gradle/caches/transforms-3/044738e17ac43254a53bfd053c4eb51b/transformed/jetified-hermes-android-0.72.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/muhammadabdullah/.gradle/caches/transforms-3/044738e17ac43254a53bfd053c4eb51b/transformed/jetified-hermes-android-0.72.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

